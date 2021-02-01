export default {
    isApplicable(token) {
        return token.math === "-";
    },
    process(leftTokenValue, rightTokenValue) {
        return Number(leftTokenValue) - Number(rightTokenValue);
    }
}