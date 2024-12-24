type Mods = Record<string, boolean | string>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
) =>
    [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_cls, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
