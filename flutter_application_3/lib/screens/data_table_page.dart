import 'package:flutter/material.dart';

class DataTablePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Data Table Example'),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              // Navigate back to login page
              Navigator.pushReplacementNamed(context, '/login');
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: DataTable(
          columns: const <DataColumn>[
            DataColumn(label: Text('Company')),
            DataColumn(label: Text('Revenue')),
            DataColumn(label: Text('Profit')),
          ],
          rows: const <DataRow>[
            DataRow(cells: <DataCell>[
              DataCell(Text('Company A')),
              DataCell(Text('\$100,000')),
              DataCell(Text('\$20,000')),
            ]),
            DataRow(cells: <DataCell>[
              DataCell(Text('Company B')),
              DataCell(Text('\$120,000')),
              DataCell(Text('\$25,000')),
            ]),
            DataRow(cells: <DataCell>[
              DataCell(Text('Company C')),
              DataCell(Text('\$80,000')),
              DataCell(Text('\$15,000')),
            ]),
          ],
        ),
      ),
    );
  }
}
