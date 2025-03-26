import React from "react";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Hello Ant Design + Tailwind!</h1>
      <Button type="primary" className="text-base">
        Ant Design Button
      </Button>
    </div>
  );
}
