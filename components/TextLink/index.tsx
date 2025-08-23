import Link from "next/link";
import styles from './textlink.module.css';

export default function TextLink({href, children, style = {}, className = "", ...props}: {href: string, children: React.ReactNode, style?: React.CSSProperties, className?: string, [key: string]: any}) {
    return (
        <Link href={href} style={{...style}} className={`${styles.textLink} ${className}`} {...props}>
            {children}
        </Link>
    );
}
