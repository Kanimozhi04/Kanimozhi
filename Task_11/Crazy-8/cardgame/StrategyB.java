package cardgame;
import java.util.List;

public class StrategyB  implements  PlayerStrategy
{
    int playerId;
	List<Integer> opponentIds;
	List<Card> myCards;
	Card topPileCard;
	Card.Suit changedSuit;

    public void receiveInitialCards(List<Card> cards) 
    {
      this.myCards=cards;
    }
    public boolean shouldDrawCard(Card topPileCard, Card.Suit changedSuit) 
    {
		this.topPileCard=topPileCard;
		this.changedSuit=changedSuit;
		
		if(changedSuit == null) 
        {
			for(int i=0;i<myCards.size();i++)
            {
				if(myCards.get(i).getSuit().equals(topPileCard.getSuit())||myCards.get(i).getRank().equals(topPileCard.getRank())) 
                {
					return false;
				}
			}
		}
		else 
        {
			for(int i=0;i<myCards.size();i++) 
            {
				if(myCards.get(i).getSuit().equals(changedSuit)) 
                {
					return false;
				}
			}
		}
		return true;
	}
    public void receiveCard(Card drawnCard) 
    {
		System.out.println("Player2 recieved :"+drawnCard.getRank()+" "+drawnCard.getSuit());
		myCards.add(drawnCard);
	}
}
