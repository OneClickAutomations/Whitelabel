interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 gradient-text ${className}`}>
      {children}
    </h2>
  );
}