import { Pressable, PressableProps } from 'react-native';
import ThemedText from './ThemedText';

interface Props extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
    return (
        <Pressable
            {...rest}
            className={`bg-light-primary text-light-primary dark:text-dark-primary dark:bg-dark-tertiary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}>
            <ThemedText className='text-white'>{children}</ThemedText>
        </Pressable>
    )
}

export default ThemedButton