import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
          headerShown: false, // 👈 Isso aqui oculta o cabeçalho de TODAS as rotas dentro deste layout
        }}
    />;
}
