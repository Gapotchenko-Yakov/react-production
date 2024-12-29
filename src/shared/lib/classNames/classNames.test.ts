import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('main class only', () => {
        expect(classNames('main-class', {}, [])).toBe('main-class');
    });

    test('with additional classes', () => {
        const expected = 'main-class class-1 class-2';

        expect(classNames('main-class', {}, ['class-1', 'class-2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'main-class class-1 class-2 hovered active';

        expect(
            classNames(
                'main-class',
                { hovered: true, active: true },
                ['class-1', 'class-2'],
            ),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'main-class class-1 class-2 active';

        expect(
            classNames(
                'main-class',
                { hovered: false, active: true },
                ['class-1', 'class-2'],
            ),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'main-class class-1 class-2 hovered';

        expect(
            classNames(
                'main-class',
                { hovered: true, active: undefined },
                ['class-1', 'class-2'],
            ),
        ).toBe(expected);
    });
});
