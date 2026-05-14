/**
 * Standard padded scroll container for content under the tab bar.
 */
export function ScreenContainer({
  children,
  title,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 page-fade">
      <div className={`px-6 pt-3 ${className}`}>
        {title && (
          <h1 className="text-center text-[22px] font-semibold tracking-[0.22em] text-cream mt-2 mb-5">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
}
