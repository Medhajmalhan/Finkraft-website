import 'package:flutter/material.dart';

class BarChartPainter extends CustomPainter {
  final List<double> revenues;
  final List<double> profits;
  final List<Color> barColors;

  BarChartPainter(this.revenues, this.profits, this.barColors);

  @override
  void paint(Canvas canvas, Size size) {
    final barWidth = size.width / (revenues.length * 2);
    final maxBarHeight = size.height * 0.8;

    for (int i = 0; i < revenues.length; i++) {
      final barX = i * 2 * barWidth + barWidth;
      final revenueBarHeight = maxBarHeight * (revenues[i] / 120000); // Adjust max revenue value

      final profitBarHeight = maxBarHeight * (profits[i] / 25000); // Adjust max profit value

      canvas.drawRect(
        Rect.fromLTWH(barX - barWidth / 2, size.height - revenueBarHeight, barWidth, revenueBarHeight),
        Paint()..color = barColors[i],
      );

      canvas.drawRect(
        Rect.fromLTWH(barX - barWidth / 2, size.height - profitBarHeight, barWidth, profitBarHeight),
        Paint()..color = barColors[i].withOpacity(0.6),
      );
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
