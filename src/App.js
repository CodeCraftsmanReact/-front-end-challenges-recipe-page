import './App.css';
import omelette from './assets/images/image-omelette.jpeg'

function App() {
  return (
    <div className="background">
      <div className='page'>
        <img className='header-image' src={omelette} />
        <h3 className='font-heading'>Simple Omelette Recipe</h3>
        <p className='food-description'>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className='prep-section'>
          <p className='prep-heading'>Preparation Time</p>
          <ul>
            <li className='li-prep'><span>Total: </span>Approximately 10 minutes</li>
            <li className='li-prep'><span>Preparation: </span>5 minutes</li>
            <li className='li-prep'><span>Cooking: </span>5 minutes</li>
          </ul>
        </div>
        <div className='ingredients-section'>
          <h3 className='section-heading'>Ingredients</h3>
          <ul>
            <li className='li-ingredients'>2-3 large eggs</li>
            <li className='li-ingredients'>Salt, to taste</li>
            <li className='li-ingredients'>Pepper, to taste</li> 
            <li className='li-ingredients'>1 tablespoon of butter or oil</li>
            <li className='li-ingredients'>Optional fillings: cheese, diced vegitables, cooked meats, herbs</li>
          </ul>
        </div>
        <hr/>
        <div className='instructions-section'>
          <h3 className='section-heading'>Instructions</h3>
          <ol>
            <li><span>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span>Heat the pan: </span>Place a non-stick frying pagn over a medium heat and add butter or oil.</li>
            <li><span>Cooking the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs eventually coat the surgace.</li>
            <li><span>Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><span>Fold and serve: </span>As the omelette continutes to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><span>Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>
        <hr/>
        <div className='nutrition-section'>
          <h3 className='section-heading'>Nutrition</h3>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <div className='nutrition-item'>
            <div>Calories</div>
            <div className='nutrition-value'>277kcal</div>
          </div>
          <hr/>
          <div className='nutrition-item'>
            <div>Carbs</div>
            <div className='nutrition-value'>0g</div>
          </div>
          <hr/>
          <div className='nutrition-item'>
            <div>Protein</div>
            <div className='nutrition-value'>20g</div>
          </div>
          <hr/>
          <div className='nutrition-item'>
            <div>Fat</div>
            <div className='nutrition-value'>22g</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
