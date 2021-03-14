<script>
    import Layout from './Layout.svelte';
    export let stacks;
</script>

<svelte:head>
    <title>Pulumi Overview</title>
</svelte:head>

<Layout>
    <div class="container">
        <h1 class="title is-4">Pulumi Overview</h1>
        <div class="content">
            <table class="table">
                <tr>
                    <th>Organization</th>
                    <th>Project</th>
                    <th>Stack</th>
                    <th>path</th>
                </tr>
                {#each stacks as stack}
                    <tr>
                        <td>{stack.organization}</td>
                        <td>{stack.project}</td>
                        <td>{stack.stack}</td>
                        <td>{stack.path}</td>
                    </tr>
                {/each}
            </table>
        </div>
    </div>
</Layout>

<style>
</style>
