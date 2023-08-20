// Define a type for the GitHub repository data

"use client"

interface GitHubRepo {
    id: number;
    name: string;
    language: string;
    // Add other properties as needed
}

// Define a type for the client configuration
interface GitHubClientConfig {
    username: string;
    token: string;
}

// Now, you can use these types in your code

// components/GitHubRepos.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubRepos = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]); // Use the GitHubRepo type here

 

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My GitHub Repositories</h2>
            <ul className="list-disc pl-4">
                {repos.map((repo) => (
                    <li key={repo.id} className="mb-4">
                        <h3 className="text-xl font-semibold">{repo.name}</h3>
                        <p className="text-gray-600">Primary Language: {repo.language}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default GitHubRepos;
