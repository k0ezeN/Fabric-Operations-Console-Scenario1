# Fabric-Operations-Console-Scenario1

## Clone repo :

git clone git@github.com:k0ezeN/Fabric-Operations-Console-Scenario1.git

## Setup :

cd Fabric-console-Org1

# Bring up Network
`./scripts/setupNetwork.sh up`

# Bring up Org1 console
`./scripts/setupConsole.sh up`

# Create Org1 Zip File
`./scripts/createAssets.sh`

cd ../Fabric-console-Org2

# Bring up Org2 console
`./scripts/setupConsole.sh up`

# Create Org2 Zip File
`./scripts/createAssets.sh`

Org1 Console : 
* Open browser to URL http://localhost:3100/
* Login with admin/password
* Change password

Org2 Console : 
* Open browser to URL http://localhost:3200/
* Login with admin/password
* Change password

### Import components into console
* Switch to "Settings" page 
* Click "Import"
* Select zip file ./workarea/console_assets.zip

ENJOY

