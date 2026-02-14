import { useParams } from "react-router-dom";

export function withRouterParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

export function toSnakeCase(text) {
    return String(text)
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, "_");
}
