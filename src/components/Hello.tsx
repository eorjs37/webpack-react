
export interface HelloProps {
    complier:string;
    framework:string;
}

export const Hello = (props:HelloProps) => <h1>

    Hello from {props.complier} and {props.framework}!
</h1>