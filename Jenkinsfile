pipeline {
    agent any

    stages {

        stage('Verify Project') {
            steps {
                bat '''
                    echo Checking project files...
                    dir

                    if not exist package.json (
                        echo ERROR: package.json not found!
                        exit /b 1
                    )

                    if not exist server.js (
                        echo ERROR: server.js not found!
                        exit /b 1
                    )

                    echo Project files verified successfully.
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed!'
        }
    }
}