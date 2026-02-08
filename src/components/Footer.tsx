export default function Footer() {
  return (
    <footer className="border-t border-[#333333]/8 px-6 md:px-10 py-8 bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <span className="text-xs text-[#333333]/30 tracking-[0.15em] uppercase">
          &copy; {new Date().getFullYear()} MNV
        </span>
      </div>
    </footer>
  );
}
