$ErrorActionPreference = "Stop"
$WarningPreference = "Continue"
$VerbosePreference = "SilentlyContinue"

$websiteName = "temp-old-croquet-australia"
$stagingSlot = "staging"
$productionSlot = "production"

Write-Host "$websiteName`: switching $stagingSlot slot to $productionSlot slot..."
Switch-AzureWebsiteSlot -Name $websiteName -Slot1 $stagingSlot -Slot2 $productionSlot -Force

$websiteAddress = "https://$websiteName.azurewebsites.net/"
Write-Host "Opening $websiteAddress for manual smoke tests..."
Start-Process -FilePath $websiteAddress
