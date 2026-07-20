# capture-chrome-window.ps1
# Script para capturar evidência visual da janela do Chrome durante a execução
$processName = "chrome"
$outputPath = "cypress/evidencias/screenshot_$(Get-Date -Format 'yyyyMMdd_HHmmss').png"

if (Get-Process $processName -ErrorAction SilentlyContinue) {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.SendKeys]::SendWait("%{PRTSC}")
    Start-Sleep -m 500
    $img = [System.Windows.Forms.Clipboard]::GetImage()
    $img.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Captura salva em: $outputPath"
} else {
    Write-Warning "Chrome não está em execução."
}
