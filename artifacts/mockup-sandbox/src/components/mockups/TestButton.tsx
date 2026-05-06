import { Button } from "../ui/button";

export function TestButton() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Test Component</h1>
      <p>This is a test button:</p>
      <Button>Click Me</Button>
    </div>
  );
}