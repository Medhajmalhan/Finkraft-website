import 'package:flutter/material.dart';
import 'package:flutter_application_3/screens/landing_page.dart';
import 'package:flutter_application_3/screens/login_page.dart';
import 'package:flutter_application_3/screens/data_table_page.dart';

void main() {
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
