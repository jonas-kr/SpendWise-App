import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export default function SafeScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className="flex-1 bg-magnolia dark:bg-cinder">
      {children}
    </SafeAreaView>
  );
}