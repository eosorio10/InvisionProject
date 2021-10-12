package InvisionProject;

import java.awt.*; import javax.swing.*;
import javax.swing.plaf.DimensionUIResource;

public class windowTest
{

    private static void objectWindow()
    {
        JFrame frame = new JFrame("INVISION");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel textLabel = new JLabel("Object Page",SwingConstants.CENTER);
        textLabel.setPreferredSize(new DimensionUIResource(1500, 800));
        frame.getContentPane().add(textLabel, BorderLayout.CENTER);

        frame.setLocationRelativeTo(null);
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args)
    {
        objectWindow();
    }
}