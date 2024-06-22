import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

class LandingPage extends StatefulWidget {
  @override
  _LandingPageState createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  ScrollController _scrollController = ScrollController();
  bool _showNavBar = false;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      if (_scrollController.offset > MediaQuery.of(context).size.height * 0.3) {
        if (!_showNavBar) {
          setState(() {
            _showNavBar = true;
          });
        }
      } else {
        if (_showNavBar) {
          setState(() {
            _showNavBar = false;
          });
        }
      }
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              children: [
                _buildTopSection(),
                _buildTrustedBySection(),
                _buildPartnersSection(),
                _buildProcessSection(),
                _buildBenefitsSection(),
                _buildContactSection(),
                _buildFooter(),
              ],
            ),
          ),
          _showNavBar
              ? Positioned(
                  top: 0,
                  left: 0,
                  right: 0,
                  child: _buildNavigationBar(),
                )
              : Container(),
        ],
      ),
    );
  }

  Widget _buildTopSection() {
    return Container(
      height: MediaQuery.of(context).size.height,
      child: Stack(
        children: [
          Positioned.fill(
            child: Image.asset(
              'assets/image.png',
              fit: BoxFit.cover,
            ),
          ),
          Positioned(
            top: 65,
            left: 100,
            child: Image.asset(
              'assets2/image.png',
              width: 150,
              height: 75,
            ),
          ),
          Positioned(
            top: 20,
            right: 20,
            child: Row(
              children: [
                IconButton(
                  icon: FaIcon(FontAwesomeIcons.facebook, color: Colors.white),
                  onPressed: () {
                    // Add your Facebook URL
                  },
                ),
                IconButton(
                  icon: FaIcon(FontAwesomeIcons.twitter, color: Colors.white),
                  onPressed: () {
                    // Add your Twitter URL
                  },
                ),
                IconButton(
                  icon: FaIcon(FontAwesomeIcons.instagram, color: Colors.white),
                  onPressed: () {
                    // Add your Instagram URL
                  },
                ),
                IconButton(
                  icon: FaIcon(FontAwesomeIcons.linkedin, color: Colors.white),
                  onPressed: () {
                    // Add your LinkedIn URL
                  },
                ),
              ],
            ),
          ),
          Positioned(
            top: 70,
            left: 0,
            right: 0,
            child: Divider(color: Colors.white),
          ),
          Positioned(
            top: 100,
            left: 600,
            right: 20,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    _buildNavItem('Solutions'),
                    SizedBox(width: 20),
                    _buildNavItem('Compliance'),
                    SizedBox(width: 20),
                    _buildNavItem('Resources'),
                    SizedBox(width: 20),
                    _buildNavItem('About'),
                    SizedBox(width: 20),
                    _buildNavItem('Careers'),
                    SizedBox(width: 20),
                    _buildNavItem('Get In Touch'),
                    SizedBox(width: 20),
                    _buildNavItem('Book a Demo'),
                  ],
                ),
                ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/login');
                  },
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
                  ),
                  child: Text(
                    'Login',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 75,
            top: MediaQuery.of(context).size.height * 0.3,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '\$25m in annual savings',
                  style: GoogleFonts.oswald(
                    fontSize: 50,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'extracted from',
                  style: GoogleFonts.oswald(
                    fontSize: 50,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'unstructured data.',
                  style: GoogleFonts.oswald(
                    fontSize: 50,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'Imagine how much money',
                  style: GoogleFonts.oswald(
                    fontSize: 50,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'are you losing?',
                  style: GoogleFonts.oswald(
                    fontSize: 50,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    // Add your case study navigation or functionality here
                  },
                  child: Text('View Case Study'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem(String title) {
    return Text(
      title,
      style: TextStyle(
        fontSize: 16,
        color: Colors.black,
        fontWeight: FontWeight.bold,
      ),
    );
  }

  Widget _buildNavigationBar() {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.symmetric(horizontal: 100, vertical: 15),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Image.asset(
            'assets2/image.png',
            width: 150,
            height: 75,
          ),
          Row(
            children: [
              _buildNavItem('Solutions'),
              SizedBox(width: 20),
              _buildNavItem('Compliance'),
              SizedBox(width: 20),
              _buildNavItem('Resources'),
              SizedBox(width: 20),
              _buildNavItem('About'),
              SizedBox(width: 20),
              _buildNavItem('Careers'),
              SizedBox(width: 20),
              _buildNavItem('Get In Touch'),
              SizedBox(width: 20),
              _buildNavItem('Book a Demo'),
            ],
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/login');
            },
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
            ),
            child: Text(
              'Login',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTrustedBySection() {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.all(75),
      child: Column(
        children: [
          Text(
            'Trusted by leading global brands',
            style: GoogleFonts.playfairDisplay(
              fontSize: 50,
              color: Colors.black,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 20),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 20,
            runSpacing: 20,
            children: [
              _buildBrandLogo('assets3/image.png'),
              _buildBrandLogo('assets4/image.png'),
              _buildBrandLogo('assets5/image.png'),
              _buildBrandLogo('assets6/image.png'),
              _buildBrandLogo('assets7/image.png'),
              _buildBrandLogo('assets8/image.png'),
              _buildBrandLogo('assets9/image.png'),
              _buildBrandLogo('assets10/image.png'),
              _buildBrandLogo('assets11/image.png'),
              _buildBrandLogo('assets12/image.png'),
              _buildBrandLogo('assets13/image.png'),
              _buildBrandLogo('assets14/image.png'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildPartnersSection() {
    return Container(
      color: Colors.black,
      width: double.infinity,
      padding: EdgeInsets.all(75),
      child: Column(
        children: [
          Text(
            'Our Partners',
            style: GoogleFonts.playfairDisplay(
              fontSize: 50,
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 20),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 40,
            runSpacing: 40,
            children: [
              _buildBrandLogo('assets15/image.png', 200, 100),
              _buildBrandLogo('assets16/image.png', 200, 100),
              _buildBrandLogo('assets17/image.png', 200, 100),
              _buildBrandLogo('assets18/image.png', 200, 100),
              _buildBrandLogo('assets19/image.png', 200, 100),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildProcessSection() {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.all(25),
      child: Row(
        children: [
          Expanded(
            flex: 2,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Automate complex accounting\nprocesses and reduce costs',
                  style: GoogleFonts.playfairDisplay(
                    fontSize: 50,
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Finkraft helps enterprises achieve invoicedata extraction & validation,\n and GST input claim compliances at scale. Poor compliance with invoice\nhandling processes are the single largest driver of tax disputes and\nlitigation for Indian enterprises. Our cutting-edge tech solutions aid\nfinance teams to automate compliance critical processes delivering\nimmediate monetary saving and long-term compliance safeguards.',
                  style: GoogleFonts.lora(
                    fontSize: 20,
                    color: Colors.black,
                    height: 1.5,
                  ),
                ),
                SizedBox(height: 20),
                Container(
                  padding: EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.black),
                    borderRadius: BorderRadius.circular(5),
                  ),
                  child: RichText(
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: '15%',
                          style: GoogleFonts.lora(
                            fontSize: 40,
                            color: Colors.black,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        WidgetSpan(
                          child: SizedBox(width: 10),
                        ),
                        TextSpan(
                          text: 'of India\'s largest corporations use Finkraft GST & Recon solutions',
                          style: GoogleFonts.lora(
                            fontSize: 20,
                            color: Colors.black,
                            fontStyle: FontStyle.italic,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            flex: 1,
            child: Image.asset(
              'assets20/image.png',
              fit: BoxFit.cover,
              height: 600,
              width: 600,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBenefitsSection() {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.all(25),
      child: Column(
        children: [
          Text(
            'Finkraft process automation benefits',
            style: GoogleFonts.playfairDisplay(
              fontSize: 50,
              color: Colors.black,
              fontWeight: FontWeight.bold,
            ),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 20),
          Image.asset(
            'assets21/image.png',
            width: 1300,
            height: 400,
            fit: BoxFit.cover,
          ),
        ],
      ),
    );
  }

  Widget _buildContactSection() {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.all(10),
      child: Column(
        children: [
          Text(
            'Speak to our experts',
            style: GoogleFonts.playfairDisplay(
              fontSize: 50,
              color: Colors.black,
              fontWeight: FontWeight.bold,
            ),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 10),
          Text(
            'Every enterprise has unique challenges and requirements.\nArrange a call to find out how we can help automate\nyour specific accounting processes.',
            textAlign: TextAlign.center,
            style: GoogleFonts.lora(
              fontSize: 16,
              color: Colors.black,
              fontStyle: FontStyle.italic,
            ),
          ),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              // Handle button press
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.green,
              padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
            ),
            child: Text(
              'GET IN TOUCH',
              style: TextStyle(
                fontSize: 16,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFooter() {
    return Container(
      color: Colors.tealAccent.shade700,
      width: double.infinity,
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Solutions',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Compliance',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Resources',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'About',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Get in Touch',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Book a Demo',
                    style: GoogleFonts.lora(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            ],
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                icon: FaIcon(FontAwesomeIcons.facebook, color: Colors.white),
                onPressed: () {
                  // Add your Twitter URL
                },
              ),
              IconButton(
                icon: FaIcon(FontAwesomeIcons.twitter, color: Colors.white),
                onPressed: () {
                  // Add your Twitter URL
                },
              ),
              IconButton(
                icon: FaIcon(FontAwesomeIcons.instagram, color: Colors.white),
                onPressed: () {
                  // Add your Twitter URL
                },
              ),
              IconButton(
                icon: FaIcon(FontAwesomeIcons.linkedin, color: Colors.white),
                onPressed: () {
                  // Add your Twitter URL
                },
              ),
            ],
          ),
          SizedBox(height: 20),
          Divider(color: Colors.white),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '© 2024 Finkraft.ai All Right Reserved',
                style: GoogleFonts.lora(
                  fontSize: 14,
                  color: Colors.white,
                ),
              ),
              Row(
                children: [
                  Text(
                    'Terms of Service',
                    style: GoogleFonts.lora(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 20),
                  Text(
                    'Privacy Policy',
                    style: GoogleFonts.lora(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 20),
                  Text(
                    'Cookie Policy',
                    style: GoogleFonts.lora(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 20),
                  Text(
                    'Disclaimers',
                    style: GoogleFonts.lora(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildBrandLogo(String assetPath, [double width = 100, double height = 50]) {
    return Image.asset(
      assetPath,
      width: width,
      height: height,
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: LandingPage(),
    debugShowCheckedModeBanner: false,
  ));
}
