pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Mohankumar09/SalonSpa.git'
      }
    }

    stage('Build') {
      steps {
        sh 'echo Building the project...'
        // Use real build commands like: mvn install, npm install, etc.
      }
    }

    stage('Test') {
      steps {
        sh 'echo Running tests...'
        // Add test commands here
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying...'
        // Add deploy commands here
      }
    }
  }

  post {
    success {
      echo 'Build and Deploy Success!'
    }
    failure {
      echo 'Pipeline Failed.'
    }
  }
}
