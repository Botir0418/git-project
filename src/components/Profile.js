import React, {Component} from 'react';
import Link from './Link';
import List from './List';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            repositories: [],
            loading: true,
            error: ''
        };
    }

    async componentDidMount() {
        try{
            const profile = await fetch('https://api.github.com/users/Botir0418');
            const profileJSON = await profile.json();

            if(profileJSON){
                const repositories = await fetch(profileJSON.repos_url);
                const repositoriesJSON = await repositories.json();

                this.setState({
                    data: profileJSON,
                    repositories: repositoriesJSON,
                    loading: false,
                })
            }
        } catch(error){
            this.setState({
                loading: false,
                error: error.massage,
            });
        }
    }

    render() {
        const {data,loading,repositories,error} = this.state;

        if(loading || error){
            return <h1>{loading ? 'Loading...' : error }</h1>
        }

        const items = [
            {
                label: 'html_url',
                value: <Link url={data.html_url} title='   Github URL' />
            },
            {label : 'repos_url  ', value: data.repos_url},
            {label: 'name', value: data.name},
            {label: 'email', value: data.email},
            {label: 'bio', value: data.bio},
            {label: 'followers: ', value: data.followers},
            {label: 'following: ', value: data.following}
        ];

        const projects = repositories.map(repository => ({
            label: repository.name,
            value: <Link url={repository.html_url} title='  Github URL' />,
        }));

        return (
            <div>
                <img src={data.avatar_url} alt='avatar'/>
                <List title='Profile' items={items}/>
                <List title='Projects' items={projects} />
            </div>
        );
    }
}


export default Profile;
