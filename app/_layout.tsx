import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
     <Stack.Screen name='index' options={{title : 'Home'}} />
     <Stack.Screen name='CustomerScreen' options={{title : 'Customer'}} />
     <Stack.Screen name='MetodePembayaranScreen' options={{title : 'MetodePembayaran'}} />
     <Stack.Screen name='PaketScreen' options={{title : 'Paket'}} />
     <Stack.Screen name='TransaksiScreen' options={{title : 'Transaksi'}} />
  </Stack>;
}
