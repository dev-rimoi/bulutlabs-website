export default function CSSTest() {
  return (
    <div className="fixed top-0 left-0 z-50 p-4 bg-red-500 text-white">
      <p>If this has a red background, Tailwind CSS is working!</p>
      <p className="mt-2 text-yellow-300">Yellow text test</p>
      <div className="mt-2 p-2 bg-blue-500 rounded">Blue box with rounded corners</div>
    </div>
  );
}