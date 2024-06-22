import 'package:flutter/material.dart';
import 'package:flutter_application_3/screens/landing_page.dart';
import 'package:flutter_application_3/screens/login_page.dart';
import 'package:flutter_application_3/screens/data_table_page.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: FirebaseOptions(
      apiKey: "AIzaSyDqPosmD8hhRO_zmK-5Nzhx4scyH9u4qy0",
      authDomain: "finkraft-website.firebaseapp.com",
      projectId: "finkraft-website",
      storageBucket: "finkraft-website.appspot.com",
      messagingSenderId: "374519324860",
      appId: "1:374519324860:web:2c7fa958dd78d61cc530b9",
      measurementId: "G-S7Q56T3M1S",
    ),
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Finkraft.ai',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => LandingPage(),
        '/login': (context) => LoginPage(),
        '/data_table': (context) => DataTablePage(),
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
