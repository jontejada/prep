/*
Your task is to implement a function that calculates an election winner from a list of voter selections using an Instant Runoff Voting algorithm. If you haven't heard of IRV, here's a basic overview (slightly altered for this kata):

Each voter selects several candidates in order of preference.
The votes are tallied from the each voter's first choice.
If the first-place candidate has more than half the total votes, they win.
Otherwise, find the candidate who got the least votes and remove them from each person's voting list.
In case of a tie for least, remove all of the tying candidates.
In case of a complete tie between every candidate, return nil(Ruby)/None(Python)/undefined(JS).
Start over.
Continue until somebody has more than half the votes; they are the winner.
Your function will be given a list of voter ballots; each ballot will be a list of candidates (symbols) in descending order of preference. You should return the symbol corresponding to the winning candidate. See the default test for an example!

voters = [["dem", "ind", "rep"],
          ["rep", "ind", "dem"],
          ["ind", "dem", "rep"],
          ["ind", "rep", "dem"]];
Test.assertSimilar(runoff(voters), "ind");
voters = [["a", "c", "d", "e", "b"],
         ["e", "b", "d", "c", "a"],
         ["d", "e", "c", "a", "b"],
         ["c", "e", "d", "b", "a"],
         ["b", "e", "a", "c", "d"]];
Test.assertSimilar(runoff(voters), undefined);
*/


function runoff(voters){
	var total = voters.length;
	var winner = false;
	
	while (!winner) {
		var sums = {};
		for (var i = 0; i < voters.length; i++) {
			if (!sums[voters[i]])
		}
	}
}






