package cardgame;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class GameEng {

	public static void main(String[] args) {
		Card topCard;
		
	    List<Card>deck=new ArrayList<>();
	    deck=Card.getDeck();
	    //Shuffles the cards
	    Collections.shuffle(deck);
	    //object is created
	    StrategyA strategyA =new StrategyA();
	    StrategyB strategyB=new  StrategyB();
	    
	    List<Card> player1=new ArrayList<>();
		List<Card> player2=new ArrayList<>();
		//Odd number of cards to player1 and Even number of cards to player2
		for(int i=0;i<14;i++)
		{
			if(i%2== 1)
			{
				player1.add(deck.get(0));
				
			}
			else
			{
				player2.add(deck.get(0));
			}
			deck.remove(0);
		}
		topCard=deck.get(0);
		deck.remove(0);
		
		int i,j;
		System.out.println("Cards of Player1:");
		//Prints the Player1 assigned cards
		for(i=0;i<player1.size();i++)
		{
		
			System.out.println(player1.get(i).getRank()+" "+player1.get(i).getSuit());
		}
		//Prints the Player2 assigned cards
		System.out.println("Cards of Player2:");
		for(j=0;j<player2.size();j++)
		{
		
			System.out.println(player2.get(j).getRank()+" "+player2.get(j).getSuit());
		}
		System.out.println("Top Card:"+topCard.getRank()+" "+topCard.getSuit());
		//strategyA.receiveIntialCards(player1);
		//strategyB.receiveIntialCards(player2);
		
	    
	    
		
	}

}
