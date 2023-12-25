import { observer } from 'mobx-react';

import PlayerScoring from 'components/player-scoring';

function PlayersScreen() {
  return (
    <PlayerScoring
      caption="Scoring all incomplete feature and the fields."
      isFinishGame
      message="Select a player or press 'Confirm' to end."
      subtitle="Scoring Features"
      title="Confirm your"
    />
  );
}

export default observer(PlayersScreen);
