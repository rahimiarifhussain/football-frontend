export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Football League System. All rights reserved.
      </div>
    </footer>
  );
}
