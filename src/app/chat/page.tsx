import OneMessage from "@/components/Chat/OneMessage";

export default function Home() {
  const messages = [
    "Hey, how are you?",
    "I'm good, thanks! How about you?",
    "I'm doing great, just working on some code.",
    "Nice! What are you working on?",
    "A chat data generator in JavaScript.",
    "Sounds interesting! Can I see it?",
    "Sure, I'll share the code with you.",
    "Awesome, thanks!",
  ];

  return (
    <>
      {messages.map((msg, i) => (
        <OneMessage received={i % 2 === 0} key={i} message={msg} />
      ))}
    </>
  );
}
