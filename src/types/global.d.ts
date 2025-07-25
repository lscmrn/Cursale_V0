declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
    declare module '*.png' {
        const value: string;
        export default value;
    }

    declare module '*.jpg' {
        const value: string;
        export default value;
    }

    declare module '*.jpeg' {
        const value: string;
        export default value;
    }

    declare module '*.webp' {
        const value: string;
        export default value;
    }

    declare module '*.svg' {
        import * as React from 'react';
        export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
        const src: string;
        export default src;
    }
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}
