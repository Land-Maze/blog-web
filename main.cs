using System;
using System.Collections.Generic;
					
public class Program
{
	private static void Task1_1(){
		Console.Write("Enter your type [string, int, bool]: ");
		string typeToConvert = Console.ReadLine().ToLower();
		
		Console.Write("Enter a value to convert: ");
        string valueToConvert = Console.ReadLine();
		
		if(typeToConvert == "string") Console.Write("Here's your result: " + valueToConvert);
		if(typeToConvert == "int") {
			if(int.TryParse(valueToConvert, out int convertedValue)) Console.Write("Here's your result: " + convertedValue);
			else Console.WriteLine("Unable to convert. Try using another value");
		}
		if(typeToConvert == "bool") {
			if(bool.TryParse(valueToConvert, out bool convertedValue)) Console.Write("Here's your result: " + convertedValue);
			else Console.WriteLine("Unable to convert. Try using another value");
		}
		return;
	}
	private static void Task1_2(){
		Console.Write("Enter your type [string, int, bool]: ");
		string typeToConvert = Console.ReadLine().ToLower();
		
		Console.Write("Enter a value to convert: ");
        string valueToConvert = Console.ReadLine();
		
		switch(typeToConvert){
			case "string":
				Console.Write("Here's your result: " + valueToConvert);
				break;
			case "int":
				if(int.TryParse(valueToConvert, out int intConvertedValue)) Console.Write("Here's your result: " + intConvertedValue);
				else Console.WriteLine("Unable to convert. Try using another value");
				break;
			case "bool":
				if(bool.TryParse(valueToConvert, out bool boolConvertedValue)) Console.Write("Here's your result: " + boolConvertedValue);
				else Console.WriteLine("Unable to convert. Try using another value");
				break;
			default:
				Console.WriteLine("No valid type inputed");
				break;
		}
	}
	public static void Task2(){
		bool[] bools = new bool[]{true, false, false, true, true, true, false};
		int[,] matrix = new int[,]{{1,2},{3,4},{5,6},{7,8},{10,11}}; // We could write this w/o new int[,] though
		string[][] messages = new string[][]{ // Same as here
			new string[]{"monday", "tuesday", "wednesday", "thursday", "friday"},
			new string[]{"First", "Second!", "Third"},
			new string[]{"124", "1230", "-124123", "16515"},
		};
		List<byte> bytes = new List<byte>() {byte.MinValue, 10, 50, 80, byte.MaxValue};
		
		Console.WriteLine("Here's 1 dimensional array (On new line): ");
		Console.Write("[ ");
		for(int i = 0; i < bools.Length; i++){
            Console.Write(bools[i]);
            if(i != bools.Length - 1) Console.Write(", ");
        }
		Console.Write(" ]");

        Console.WriteLine("\n\nHere's 2 dimensional array (On new line): ");
        Console.Write("[\n");
        for(int i = 0; i < matrix.GetLength(0); i++){
            Console.Write("\t[ ");
            for(int j = 0; j < matrix.GetLength(1); j++){
                Console.Write(matrix[i, j]);
                if(j != matrix.GetLength(1) - 1) Console.Write(", ");
            }
            Console.Write(" ]");
            if(i != matrix.GetLength(0) - 1) Console.Write(",\n");
        }
        Console.Write("\n]");

        Console.WriteLine("\n\nHere's jagged array (On new line): ");

        Console.Write("[\n");
        for(int i = 0; i < messages.Length; i++){
            Console.Write("\t[ ");
            for(int j = 0; j < messages[i].Length; j++){
                Console.Write(messages[i][j]);
                if(j != messages[i].Length - 1) Console.Write(", ");
            }
            Console.Write(" ]");
            if(i != messages.Length - 1) Console.Write(",\n");
        }
        Console.Write("\n]");


        Console.WriteLine("\n\nHere's list of bytes (On new line): ");

        Console.Write("[ ");
        for(int i = 0; i < bytes.Count; i++){
            Console.Write(bytes[i]);
            if(i != bytes.Count - 1) Console.Write(", ");
        }
        Console.Write(" ]");

		return;
	}
    public static void Task3(){
        // Create a dictionary with colorcode for console
        Dictionary<string, ConsoleColor> allowColors = new Dictionary<string, ConsoleColor>(){
            {"red", ConsoleColor.Red},
            {"green", ConsoleColor.Green},
            {"blue", ConsoleColor.Blue},
        };
        
        Console.WriteLine("Enter a color to change console color: ");
        string color = Console.ReadLine().ToLower();
        if(!allowColors.ContainsKey(color)){
            Console.WriteLine("No such color");
            return;
        }
        if(string.IsNullOrEmpty(color)){
            Console.WriteLine("Wrong input");
            return;
        }
        Console.ForegroundColor = allowColors[color];
        
    }
	public static void Main()
	{
		// Task1_1();
		// Task1_2();
		// Task2();
        Task3();
		return;
	}
}