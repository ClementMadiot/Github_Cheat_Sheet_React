import { LocalVersionData } from '../../data/HomeData'
// import Header from '../Header';
import HomeHeader from './Header';

const LocalVersion = () => {
  return (
    <section className='right-part right-margin'>
      <HomeHeader/>
      {LocalVersionData.map((item, index) => (
        <article key={index} id={item.id} className={item.style}>
          <div className="title-p-box">
            <h3>{item.title}</h3>
            <div className="head-bar"></div>
            <ul>
              {item.defenition
                ? item.defenition.bold.map((boldItem, index) => (
                    <li key={index}>
                      <p className="definition">
                        <strong>{boldItem}</strong> {item.defenition.noBold[index]}
                      </p>
                      <p className="explication">
                        {item.defenition.explication[index]}
                      </p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default LocalVersion;