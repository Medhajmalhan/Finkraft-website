import 'package:flutter/material.dart';
import 'package:flutter_application_3/screens/data_table_page.dart';

class LoginPage extends StatelessWidget {
  // Dummy credentials
  static const String _dummyEmail = 'test@gmail.com';
  static const String _dummyPassword = 'password';

  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextField(
              controller: emailController,
              decoration: InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            TextField(
              controller: passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Check dummy credentials
                if (emailController.text == _dummyEmail &&
                    passwordController.text == _dummyPassword) {
                  // Navigate to data table page
                  Navigator.pushReplacementNamed(context, '/data_table');
                } else {
                  // Show error dialog for incorrect credentials
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: Text('Error'),
                      content: Text('Invalid email or password.'),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: Text('OK'),
                        ),
                      ],
                    ),
                  );
                }
              },
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
