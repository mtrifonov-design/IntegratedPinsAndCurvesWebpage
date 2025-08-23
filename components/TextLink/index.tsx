import Link from "next/link";
import styles from './textlink.module.css';

export default function TextLink({href, children, style = {}, className = ""}: {href: string, children: React.ReactNode, style?: React.CSSProperties, className?: string}) {
    return (
        <Link href={href} style={{...style}} className={`${styles.textLink} ${className}`}>
            {children}
        </Link>
    );
}
