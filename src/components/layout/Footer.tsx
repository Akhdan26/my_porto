export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} Muhammad Hifzhan Silmi. Software Engineer.
        </p>
        <p className="mt-1 text-xs text-text-tertiary/50">
          Tangerang, Indonesia
        </p>
      </div>
    </footer>
  );
}
