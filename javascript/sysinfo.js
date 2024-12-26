function downloadSysinfo() {
    const content = document.querySelector('#internal-sysinfo-textbox textarea').value;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const filename = `sysinfo-${year}-${month}-${day}-${hours}-${minutes}.json`;
    const blob = new Blob([content], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function openTabSysinfo() {
    const content = document.querySelector('#internal-sysinfo-textbox textarea').value;
    const blob = new Blob([content], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}
