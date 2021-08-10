export default interface AppButtonProps {
    color?: string;
    onPress: () => void;
    title: string;
    textColor: string;
    testID?: string;
    contained: boolean;
}
