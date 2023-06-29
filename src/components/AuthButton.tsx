import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  className,
  href,
  target,
  onClick,
  type = 'button',
}: ButtonProps) {


  if (href) {
    return (
      <Link href={href} target={target}>
        {children}
      </Link>
    );
  } else {
    return (
      <button type={type} onClick={onClick}>
        {children}
      </button>
    );
  }
}
