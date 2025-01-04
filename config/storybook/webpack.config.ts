import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }:{config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.tsx', '.ts', '.js');

    // eslint-disable-next-line no-param-reassign
    config.module = config.module || {};
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.filter((rule) => {
        if (typeof rule === 'object' && rule.test && /svg/.test(rule.test as string)) {
            return false;
        }
        return true;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
