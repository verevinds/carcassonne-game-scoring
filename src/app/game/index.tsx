import { observer } from 'mobx-react';

import PlayerScoring from 'components/player-scoring';

function GameScreen() {
  return (
    <PlayerScoring
      buttonText="Finish Game"
      message="Select a player or press 'Finish Game' to go finished stage."
      subtitle="Completed Feature’s Points"
      title="Calculate your"
    />
  );
}

export default observer(GameScreen);
