def COLOR_MAP = [
    'FAILURE' : 'danger',
    'SUCCESS' : 'good'
]

pipeline{
    agent any
    options {         ansiColor('xterm')     }
    tools {nodejs "node"}
    


    stages {  
        stage('Testing') {
            steps {
                bat "npm install"
            }
        }

        stage('Run Tests in Parallel') {
            parallel {
                stage('Boohoo UK Smoke Tests') {
                    steps {
                        script {
                            echo 'boohoo tests are running'
                            // Run Cypress detailed tests
                            bat 'npm run cy:run:boohoo'
                        }
                    }
                }
                stage('Nastygal UK Smoke tests') {
                    steps {
                        script {
                            echo 'Nastygal tests are running'
                            // Run Cypress regression suite for boohoo uk
                            bat 'npm run cy:run:nastygal'
                        }
                    }
                }

                stage('KarenmIllen UK Smoke tests') {
                    steps {
                        script {
                            // Run Cypress regression suite for NG uk
                            bat 'npm run cy:run:karenmillen'
                        }
                    }
                }
            }
        }
    }
  post {
        always {
            publishHTML(target:[
                allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                escapeUnderscores: false, 
                keepAll: false, 
                reportDir:'config/boohoo/results', 
                reportFiles: 'index.html', 
                reportName: 'Boohoo_HTML_Report']
                )
                publishHTML(target:[
                allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                escapeUnderscores: false, 
                keepAll: false, 
                reportDir:'config/nastygal/results', 
                reportFiles: 'index.html', 
                reportName: 'nastygal_HTML_Report']
                )
                publishHTML(target:[
                allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                escapeUnderscores: false, 
                keepAll: false, 
                reportDir:'config/karenmillen/results', 
                reportFiles: 'index.html', 
                reportName: 'Karenmillen_HTML_Report']
                )
            echo 'Slack Notifications'
            slackSend (
                channel: '#boohoo_jenkins_reports',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL} \n Boohoo Html Report Link: `${env.JOB_URL}nastygal_HTML_Report`  \n Nastygal Html Report Link: `${env.JOB_URL}Boohoo_HTML_Report`  \n Karenmillen Html Report Link: `${env.JOB_URL}Karenmillen_HTML_Report`",
            )
        }
    }
}