import 'package:flutter/material.dart';
import 'package:flutter_application_3/screens/login_page.dart';

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned.fill(
            child: Image.asset(
              'assets/image.png',
              fit: BoxFit.cover,
            ),
          ),
          Positioned(
            top: 20,
            left: 20,
            child: Image.asset(
              'assets2/image.png',
              width: 200,
              height: 100,
            ),
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                
                SizedBox(height: 20),
                Text(
                  'Welcome to Finkraft.ai',
                  style: TextStyle(fontSize: 24, fontWeight:FontWeight.bold, color:Colors.white),
                ),
                SizedBox(height: 40),
                ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/login');
                  },
                  child: Text('Login'),
                ),
                SizedBox(height: 20),
                
                SizedBox(height: 20),
                Text(
                  'Explore our solutions',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    _buildSolutionCard(
                      icon: Icons.business,
                      title: 'Finance',
                      description: 'Financial data analysis and insights',
                    ),
                    _buildSolutionCard(
                      icon: Icons.analytics,
                      title: 'Analytics',
                      description: 'Data-driven business intelligence',
                    ),
                    _buildSolutionCard(
                      icon: Icons.settings,
                      title: 'Integration',
                      description: 'Seamless API integration solutions',
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSolutionCard({
    required IconData icon,
    required String title,
    required String description,
  }) {
    return SizedBox(
      width: 250,
      child: Card(
        elevation: 5,
        color: Colors.blue.withOpacity(0.8),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 50, color: Colors.white),
              SizedBox(height: 10),
              Text(
                title,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              SizedBox(height: 10),
              Text(
                description,
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
