const loadPyodide = async () => {
    // Load Pyodide
    const pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.18.0/full/',
    });

    // Load additional packages if needed
    await pyodide.loadPackage(['numpy', 'pandas']);

    // Initialize Jupyter Notebook for Pyodide
    const notebook = new JupyterNotebookPyodide({
        pyodide,
        appendTo: document.body, // Append the notebook to the body of your HTML page
    });

    // Start the notebook
    await notebook.start();

    // You can use notebook.addCell() to add code and markdown cells to the notebook
    notebook.addCell('print("Hello, Pyodide!")', 'code');
};

// Call the function to load Pyodide and start the notebook
loadPyodide();

const notebook = new JupyterNotebookPyodide({
    pyodide,
    appendTo: document.getElementById('notebook-container'), // Use the container div
});
