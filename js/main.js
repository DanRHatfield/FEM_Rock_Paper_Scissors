function spiralize (n) {
	
  
  return [];
}



		// doTest(5, [
		// 	[1,1,1,1,1],
		// 	[0,0,0,0,1],
		// 	[1,1,1,0,1],
		// 	[1,0,0,0,1],
		// 	[1,1,1,1,1]]
		// );
		// doTest(8, [
		// 	[1,1,1,1,1,1,1,1],
		// 	[0,0,0,0,0,0,0,1],
		// 	[1,1,1,1,1,1,0,1],
		// 	[1,0,0,0,0,1,0,1],
		// 	[1,0,1,0,0,1,0,1],
		// 	[1,0,1,1,1,1,0,1],
		// 	[1,0,0,0,0,0,0,1],
		// 	[1,1,1,1,1,1,1,1]

    /*  1 and N = 1
        2 = all 0 except last
        n-1 = first and last as 1, rest 0
        
        what are the constants?
        - 1st & last Nth row are 1's
        - last array element in all rows are 1's

        set matrix to 1's

        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
                
        */