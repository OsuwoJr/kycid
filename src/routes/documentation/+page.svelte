<script>
    
</script>

<style>
    .section-title {
        border-bottom: 2px solid #34D399;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }
</style>

<main class="bg-gray-900 text-white min-h-screen">
    <div class="bg-gray-800 p-6 flex flex-col items-center">
        <nav class="container mx-auto flex flex-col items-start">
            <a href="/" class="text-xl font-bold text-emerald-500 mb-4">KYCID</a>
            <ul class="flex flex-col space-y-4">
                <li><a href="#introduction" class="hover:underline">Introduction</a></li>
                <li><a href="#getting-started" class="hover:underline">Getting Started</a></li>
                <li><a href="#core-components" class="hover:underline">Core Components</a></li>
                <li><a href="#routing" class="hover:underline">Routing & Navigation</a></li>
                <li><a href="#authentication-flow" class="hover:underline">Authentication Flow</a></li>
                <li><a href="#dashboard" class="hover:underline">Dashboard</a></li>
                <li><a href="#external-app" class="hover:underline">External App Interaction</a></li>
                <li><a href="#styling" class="hover:underline">Styling & Theming</a></li>
                <li><a href="#deployment" class="hover:underline">Deployment</a></li>
                <li><a href="#faq" class="hover:underline">FAQ</a></li>
                <li><a href="#contributing" class="hover:underline">Contributing</a></li>
                <li><a href="#acknowledgements" class="hover:underline">Acknowledgements</a></li>
                <li><a href="#license" class="hover:underline">License</a></li>
            </ul>
        </nav>
    </div>
    

    <main class="container mx-auto p-6">
        <section id="introduction" class="mb-12">
            <h1 class="text-4xl font-bold text-emerald-500 section-title">Introduction</h1>
            <p><strong>Overview of KYCID Platform:</strong> KYCID is a cutting-edge identity verification platform that leverages face biometrics and digital signatures to securely manage and verify user identities. The platform is designed to streamline the Know Your Customer (KYC) process, ensuring users can prove their identity once and use it across multiple platforms.</p>
            <p><strong>Purpose of the Platform:</strong> The KYCID platform aims to simplify the KYC process, providing users with a secure, user-friendly, and reliable way to manage their identities. By integrating face biometrics and blockchain technology, KYCID ensures that user data is securely stored and easily verifiable.</p>
            <p><strong>Key Features:</strong></p>
            <ul class="list-disc ml-6">
                <li>Face Biometric Scan: Secure identity verification using advanced face recognition technology.</li>
                <li>Digital Signature Generation: Create and manage digital identities with blockchain integration.</li>
                <li>Progress Tracker: A clear, step-by-step guide through the KYC process.</li>
                <li>Dashboard: Manage your identity, view KYC status, and interact with external apps.</li>
                <li>External App Interaction: Securely sign and verify challenges from third-party applications.</li>
            </ul>
        </section>

        <section id="getting-started" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Getting Started</h2>
            <h3 class="text-2xl font-semibold mt-4">Prerequisites</h3>
            <p>Before starting, ensure you have the following installed:</p>
            <ul class="list-disc ml-6">
                <li>Node.js</li>
                <li>SvelteKit</li>
                <li>Tailwind CSS</li>
            </ul>
            <h3 class="text-2xl font-semibold mt-4">Installation</h3>
            <p>Clone the repository from GitHub:</p>
            <pre class="bg-gray-800 p-4 rounded"><code>git clone https://github.com/your-username/kycid.git</code></pre>
            <p>Navigate to the project directory:</p>
            <pre class="bg-gray-800 p-4 rounded"><code>cd kycid</code></pre>
            <p>Install the necessary dependencies:</p>
            <pre class="bg-gray-800 p-4 rounded"><code>npm install</code></pre>
            <h3 class="text-2xl font-semibold mt-4">Project Structure</h3>
            <pre class="bg-gray-800 p-4 rounded"><code>
kycid/
├── src/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── Hero.svelte
│   │   ├── ProgressTracker.svelte
│   │   └── ...
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── auth.svelte
│   │   ├── dashboard.svelte
│   │   ├── app-interaction.svelte
│   │   └── ...
│   └── lib/
│       └── crypto.ts
├── static/
│   └── logo.png
├── tailwind.config.js
└── package.json
            </code></pre>
            <h3 class="text-2xl font-semibold mt-4">Running the Project Locally</h3>
            <p>To start the development server:</p>
            <pre class="bg-gray-800 p-4 rounded"><code>npm run dev</code></pre>
            <p>Visit <a href="http://localhost:5173" class="text-emerald-400 hover:underline">http://localhost:5173</a> to view the platform.</p>
        </section>

        <section id="core-components" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Core Components</h2>
            <h3 class="text-2xl font-semibold mt-4">Hero Component</h3>
            <p><strong>Location:</strong> `src/components/Hero.svelte`</p>
            <p><strong>Purpose:</strong> The Hero component serves as the first impression for users, introducing the platform's key message and a call to action (Start Your KYC).</p>
            <p><strong>Integration:</strong> The Hero component is imported and used in the `+layout.svelte` file to ensure it's displayed on every page.</p>

            <h3 class="text-2xl font-semibold mt-4">Authentication Page</h3>
            <p><strong>Location:</strong> `src/routes/auth.svelte`</p>
            <p><strong>Purpose:</strong> This page initiates the KYC process. It includes steps like Face Biometric Scan, Digital Signature Generation, and additional user details.</p>
            <p><strong>Components Used:</strong></p>
            <ul class="list-disc ml-6">
                <li>FaceScan.svelte</li>
                <li>DigitalSignature.svelte</li>
                <li>UserForm.svelte</li>
                <li>ProgressTracker.svelte</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Dashboard Page</h3>
            <p><strong>Location:</strong> `src/routes/dashboard.svelte`</p>
            <p><strong>Purpose:</strong> A user-specific area where they can view their KYC status, manage their identity, and interact with external apps.</p>
            <p><strong>Components Used:</strong></p>
            <ul class="list-disc ml-6">
                <li>IdentityOverview.svelte</li>
                <li>ChallengeRequests.svelte</li>
                <li>Settings.svelte</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">External App Interaction Page</h3>
            <p><strong>Location:</strong> `src/routes/app-interaction.svelte`</p>
            <p><strong>Purpose:</strong> Handles signing and verification of challenges from external apps.</p>
            <p><strong>Components Used:</strong></p>
            <ul class="list-disc ml-6">
                <li>SignChallenge.svelte</li>
                <li>VerificationStatus.svelte</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Progress Tracker</h3>
            <p><strong>Location:</strong> `src/components/ProgressTracker.svelte`</p>
            <p><strong>Purpose:</strong> Visual representation of the user's progress through the KYC process, providing clear milestones and steps.</p>
        </section>

        <section id="routing" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Routing & Navigation</h2>
            <p><strong>SvelteKit Routing:</strong> SvelteKit's file-based routing system simplifies navigation between pages. Each file in the `src/routes` directory corresponds to a route in the application.</p>
            <p><strong>Dynamic Routing:</strong> Use dynamic segments in file names (e.g., `[id].svelte`) to handle dynamic routes and pass parameters.</p>
            <p><strong>Linking Between Pages:</strong> Use SvelteKit's `<a href="p">` component or the `sveltekit:link` directive to navigate between routes while preserving client-side navigation.</p>
        </section>

        <section id="authentication-flow" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Authentication Flow</h2>
            <p><strong>Face Biometric Scan:</strong> Users start the KYC process by scanning their face. This is handled by the `FaceScan.svelte` component.</p>
            <p><strong>Digital Signature Generation:</strong> After scanning, users generate a digital signature to create their identity. This process is managed by the `DigitalSignature.svelte` component.</p>
            <p><strong>Progress Tracker:</strong> The `ProgressTracker.svelte` component guides users through the KYC process, showing completed and pending steps.</p>
        </section>

        <section id="dashboard" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Dashboard</h2>
            <p><strong>Identity Overview:</strong> Displays the user's KYC status and personal details, managed by the `IdentityOverview.svelte` component.</p>
            <p><strong>Challenge Requests:</strong> Shows pending requests from external apps requiring user interaction, handled by the `ChallengeRequests.svelte` component.</p>
            <p><strong>Settings:</strong> Allows users to manage their account settings and preferences, using the `Settings.svelte` component.</p>
        </section>

        <section id="external-app" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">External App Interaction</h2>
            <p><strong>Challenge Signing:</strong> Users can sign challenges from external apps securely, managed by the `SignChallenge.svelte` component.</p>
            <p><strong>Verification:</strong> The `VerificationStatus.svelte` component ensures that signed challenges are verified correctly.</p>
        </section>

        <section id="styling" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Styling & Theming</h2>
            <p><strong>Tailwind CSS:</strong> Used for styling and theming throughout the project. Customize styles in `tailwind.config.js` to match your branding.</p>
            <p><strong>Responsive Design:</strong> Tailwind's responsive utility classes ensure the platform works seamlessly on various devices.</p>
            <p><strong>Dark Theme:</strong> Apply a dark theme using Tailwind's built-in classes and custom styles.</p>
        </section>

        <section id="deployment" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Deployment</h2>
            <p><strong>Build the Project:</strong> Prepare for deployment with:</p>
            <pre class="bg-gray-800 p-4 rounded"><code>npm run build</code></pre>
            <p><strong>Deploy to Vercel:</strong> Push your project to GitHub and connect it to Vercel for automated deployment.</p>
            <p><strong>Deploy to Netlify:</strong> Similarly, connect your GitHub repository to Netlify for continuous deployment.</p>
        </section>

        <section id="faq" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">FAQ</h2>
            <h3 class="text-2xl font-semibold mt-4">How does face biometric scanning work?</h3>
            <p>Face biometric scanning uses advanced algorithms to analyze and match facial features. The `FaceScan.svelte` component integrates this technology for accurate identity verification.</p>
            <h3 class="text-2xl font-semibold mt-4">How secure is the digital signature?</h3>
            <p>Digital signatures are cryptographically secure, ensuring the authenticity and integrity of the data. The `DigitalSignature.svelte` component manages this process with blockchain integration.</p>
        </section>

        <section id="contributing" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Contributing</h2>
            <p>We welcome contributions to the KYCID project. Please fork the repository, make your changes, and submit a pull request. Follow our coding guidelines and ensure all tests pass before submitting.</p>
            <p>For more details, refer to our <a href="https://github.com/your-username/kycid" class="text-emerald-400 hover:underline">GitHub repository</a>.</p>
        </section>

        <section id="acknowledgements" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">Acknowledgements</h2>
            <p>We would like to thank the developers and contributors who have helped make KYCID a reality. Special thanks to the SvelteKit and Tailwind CSS communities for their support and resources.</p>
        </section>

        <section id="license" class="mb-12">
            <h2 class="text-3xl font-bold text-emerald-500 section-title">License</h2>
            <p>KYCID is licensed under the MIT License. See the <a href="/license" class="text-emerald-400 hover:underline">LICENSE</a> file for more information.</p>
        </section>
    </main>

</main>
