import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';

function SelectLanguage(props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {languages.map((lang) => (
        <li
          style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
          onClick={() => props.onSelect(lang)}
          key={lang}>
          {lang}
        </li>
      ))}
    </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => (
        <li key={repo.name} className='popularItem'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: null
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (lang) => {
    this.setState(() => ({
      selectedLanguage: lang,
      repos: null
    }));

    fetchPopularRepos(lang)
      .then((repos) => this.setState(() => ({ repos: repos })));
  }

  render() {
    const { selectedLanguage, repos } = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!repos
          ? <Loading />
          : <RepoGrid repos={repos} />}
      </div>
    )
  }
}

export default Popular;